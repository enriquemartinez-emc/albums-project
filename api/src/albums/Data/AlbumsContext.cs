using albums.Models;
using Microsoft.EntityFrameworkCore;

namespace albums.Data
{
    public class AlbumsContext : DbContext
    {
        public DbSet<Album> Albums => Set<Album>();

        public AlbumsContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Album>().ToTable("Album");
         }
    }
}
