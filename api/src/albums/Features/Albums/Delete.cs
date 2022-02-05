
using albums.Data;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace albums.Features.Albums
{
public class Delete
{
    public record Command(Guid id) : IRequest;

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.id).NotNull().NotEmpty();
            }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly AlbumsContext _context;

            public Handler(AlbumsContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var album = await _context.Albums.FirstOrDefaultAsync(x => x.AlbumId == request.id, cancellationToken);

                if (album == null)
                {
                    throw new Exception("Album Not Found");
                }

                _context.Albums.Remove(album);
                await _context.SaveChangesAsync(cancellationToken);

                return Unit.Value;
            }
        }
    }
}