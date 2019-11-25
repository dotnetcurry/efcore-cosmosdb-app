using ProfileAppNet30.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ProfileAppNet30.Services
{
    public interface ICosmosDbService<TEntity, in TPk> where TEntity: class
    {
        Task<IEnumerable<TEntity>> GetAsync();
        Task<TEntity> GetAsync(TPk id);
        Task<TEntity> CreateAsync(TEntity entity);
    }
}
