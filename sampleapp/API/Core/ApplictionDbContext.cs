
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using sampleapp.Core.Models;

namespace sampleapp.Core
{
    public class ApplicationDbContext : DbContext 
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Skill> Skills { get; set; }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> context) : base(context)
        {
        
        }
    }
}