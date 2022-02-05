using albums.Models;

namespace albums.Features.Albums
{
    public class AlbumsResponse
    {
        public List<Album>? Albums { get; set; } = new();
    }
}
