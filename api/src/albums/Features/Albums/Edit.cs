using albums.Data;
using albums.Models;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace albums.Features.Albums
{
    public class Edit
    {
        public record Command : IRequest<AlbumResponse>
        {
            public Guid Id { get; init; }
            public string? Name { get; init; }
            public string? Description { get; init; }
            public string? ArtistName { get; init; }
            public string? CoverUrl { get; init; }
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
                var album = await _context.Albums.FindAsync(request.Id, cancellationToken);

                if (album == null)
                {
                    throw new Exception("Album Not Found");
                }

                album.Name = request.Name;
                album.Description = request.Description;
                album.ArtistName = request.ArtistName;
                album.CoverUrl = request.CoverUrl;

                await _context.SaveChangesAsync(cancellationToken);

                return new AlbumResponse(album);
            }
        }
    }
}
