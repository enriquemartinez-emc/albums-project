using albums.Data;
using albums.Models;
using FluentValidation;
using MediatR;

namespace albums.Features.Albums
{
    public class Create
    {
        public record Command : IRequest<AlbumResponse>
        {
            public string? Name { get; set; }
            public string? Description { get; set; }
            public string? ArtistName { get; set; }
            public string? CoverUrl { get; set; }
        }

        public class Validator : AbstractValidator<Command>
        {
            public Validator()
            {
                RuleFor(m => m.Name).NotNull().Length(1, 50);
                RuleFor(m => m.Description).NotNull().Length(1, 50);
                RuleFor(m => m.ArtistName).NotNull();
            }
        }

        public class Handler : IRequestHandler<Command, AlbumResponse>
        {
            private readonly AlbumsContext _context;

            public Handler(AlbumsContext context)
            {
                _context = context;
            }

            public async Task<AlbumResponse> Handle(Command request, CancellationToken cancellationToken)
            {
                var album = new Album()
                {
                    Id = new Guid(),
                    Name = request.Name,
                    Description = request.Description,
                    CoverUrl = request.CoverUrl,
                    ArtistName = request.ArtistName
                };

                await _context.Albums.AddAsync(album);
                await _context.SaveChangesAsync(cancellationToken);

                return new AlbumResponse(album);
            }
        }
    }
}
