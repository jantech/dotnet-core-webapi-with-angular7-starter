using System;
using System.Collections.Generic;
using sampleapp.Core.Models;

namespace sampleapp.Core.Repository
{
    public interface IRepository
    {
        IEnumerable<User> GetUsers();
        void RegisterUser(User user);
    }
}