using System;

using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using sampleapp.Core.Models;

namespace sampleapp.Core
{

    public interface ISeedData
    {
        void InitData();
    }

    public class SeedData : ISeedData
    {
        ApplicationDbContext _dbContext;

        public SeedData(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void InitData()
        {

            _dbContext.Database.EnsureCreated();

            if (!_dbContext.Skills.Any())
            {

                var skill1 = new Skill { Id = 1, SkillName = "DOTNET" };
                var skill2 = new Skill { Id = 2, SkillName = "ASP DOTNET" };
                var skill3 = new Skill { Id = 3, SkillName = "WEB API" };
                var skill4 = new Skill { Id = 4, SkillName = "ANGULAR" };
                var skill5 = new Skill { Id = 5, SkillName = "REACTJS" };
                var skill6 = new Skill { Id = 6, SkillName = "MSSQL" };
                var skill7 = new Skill { Id = 7, SkillName = "TYPESCRIPT" };
                
                _dbContext.Add(skill1);
                _dbContext.Add(skill2);
                _dbContext.Add(skill3);
                _dbContext.Add(skill4);
                _dbContext.Add(skill5);
                _dbContext.Add(skill6);
                _dbContext.Add(skill7);

                _dbContext.SaveChanges();

                var usr1 = new User
                {
                    FirstName = "test first 1",
                    LastName = "test last 1",
                    Password = "test@123",
                    Skills = new List<Skill>{
                        skill1,
                        skill3,
                        skill5,
                    },
                    CreatedDate = DateTime.Now
                };

                var usr2 = new User
                {
                    FirstName = "test first 2",
                    LastName = "test last 2",
                    Password = "test@123",
                    Skills = new List<Skill>{
                        skill1,
                        skill2,
                        skill7,
                    },
                    CreatedDate = DateTime.Now
                };

                _dbContext.Add(usr1);
                _dbContext.Add(usr2);
                _dbContext.SaveChanges();

            }

        }

    }
}