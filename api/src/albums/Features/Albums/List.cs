using albums.Data;
using albums.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace albums.Features.Albums
{
    public class List
    {
        public record Query : IRequest<AlbumsResponse>;

        public class Handler : IRequestHandler<Query, AlbumsResponse>
        {
            private readonly AlbumsContext _context;

            public Handler(AlbumsContext context)
            {
                _context = context;
            }

            public async Task<AlbumsResponse> Handle(Query request, CancellationToken cancellationToken)
            {
                var albums = await _context.Albums
                    .OrderBy(_ => _.Name)
                    .AsNoTracking()
                    .ToListAsync(cancellationToken);

                return new AlbumsResponse()
                {
                    Albums = albums ?? new List<Album>()
                };
            }
        }
    }
}
