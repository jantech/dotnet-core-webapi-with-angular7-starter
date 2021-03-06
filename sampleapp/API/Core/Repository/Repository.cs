
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using sampleapp.Core.Models;

namespace sampleapp.Core.Repository
{
    public class Repository : IRepository
    {
        ApplicationDbContext dbContext;

        public Repository(ApplicationDbContext _dbContext)
        {
            dbContext = _dbContext;
        }

        public void RegisterUser(User user)
        {
            dbContext.Add(user);
            dbContext.SaveChanges();
        }

        public IEnumerable<User> GetUsers()
        {
            return dbContext.Users.Include("Skills").AsNoTracking().ToList();
        }
        
        public User GetUserById(int id) {
            return dbContext.Users.Include("Skills").AsNoTracking().FirstOrDefault(s=>s.Id == id);
        }
    }
}