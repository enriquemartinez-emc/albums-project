using albums.Data;
using albums.Models;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace albums.Features.Albums
{
    public class Edit
    {
        public class AlbumData
        {
            public string? Name { get; set; }
            public string? Description { get; set; }
            public string? ArtistName { get; set; }
            public string? CoverUrl { get; set; }
        }

        public record Command(Model Model, Guid id) : IRequest<AlbumResponse>;
        public record Model(AlbumData Album);

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Model.Album).NotNull();
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
                var album = await _context.Albums.FindAsync(request.id, cancellationToken);

                if (album == null)
                {
                    throw new Exception("Album Not Found");
                }

                album.Name = request.Model.Album.Name;
                album.Description = request.Model.Album.Description;
                album.ArtistName = request.Model.Album.ArtistName;
                album.CoverUrl = request.Model.Album.CoverUrl;

                await _context.SaveChangesAsync(cancellationToken);

                return new AlbumResponse(album);
            }
        }
    }
}
