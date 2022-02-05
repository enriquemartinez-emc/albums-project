
using albums.Data;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace albums.Features.Albums
{
public  class Details
{
    public record Query(Guid id) : IRequest<AlbumResponse>;

        public class QueryValidator : AbstractValidator<Query>
        {
            public QueryValidator()
            {
                RuleFor(x => x.id).NotNull().NotEmpty();
            }
        }

        public class QueryHandler : IRequestHandler<Query, AlbumResponse>
        {
            private readonly AlbumsContext _context;

            public QueryHandler(AlbumsContext context)
            {
                _context = context;
            }

            public async Task<AlbumResponse> Handle(Query request, CancellationToken cancellationToken)
            {
                var album = await _context.Albums!
                    .AsNoTracking()
                    .FirstOrDefaultAsync(x => x.AlbumId == request.id, cancellationToken);

                if (album == null)
                {
                    throw new Exception("Album Not Found");
                }

                return new AlbumResponse(album);
            }
        }
    }
}