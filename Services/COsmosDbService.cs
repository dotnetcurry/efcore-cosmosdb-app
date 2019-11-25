using Microsoft.EntityFrameworkCore;
using ProfileAppNet30.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ProfileAppNet30.Services
{
    public class COsmosDbService : ICosmosDbService<ProfileMaster, string>
    {
        private readonly ProfileDbContext ctx;

        public COsmosDbService(ProfileDbContext ctx)
        {
            this.ctx = ctx;
            // this will makes sure that the database is created
            ctx.Database.EnsureCreated();
        }

        public async Task<ProfileMaster> CreateAsync(ProfileMaster entity)
        {
            entity.Id = Guid.NewGuid();
            var response = await ctx.Profiles.AddAsync(entity);
            await ctx.SaveChangesAsync();
            return response.Entity;

        }

        public async Task<IEnumerable<ProfileMaster>> GetAsync()
        {

            var profiles = await ctx.Profiles.ToListAsync();
            return profiles;
        }

        public async Task<ProfileMaster> GetAsync(string id)
        {

            var profile = await ctx.Profiles.FindAsync(id);
            return profile;

        }
    }
}
