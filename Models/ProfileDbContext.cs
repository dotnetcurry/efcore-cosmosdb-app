using Microsoft.EntityFrameworkCore;

namespace ProfileAppNet30.Models
{
    public class ProfileDbContext : DbContext
    {
        public DbSet<ProfileMaster> Profiles { get; set; }

        public ProfileDbContext(DbContextOptions<ProfileDbContext> options) : base(options)
        {

        }
       
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // the container name
            modelBuilder.HasDefaultContainer("Profiles");
            // ProfileMaster has many educations and Many Experiences
            modelBuilder.Entity<ProfileMaster>().OwnsMany(e => e.Educations);
            modelBuilder.Entity<ProfileMaster>().OwnsMany(e=>e.Experience);
        }
    }
}
