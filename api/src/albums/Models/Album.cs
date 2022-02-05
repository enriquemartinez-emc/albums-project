namespace albums.Models
{
    public class Album
    {
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public string? ArtistName { get; set; }
        public string? CoverUrl { get; set; }
    }
}
