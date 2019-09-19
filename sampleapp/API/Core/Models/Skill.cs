using System;

namespace sampleapp.Core.Models
{

    public class Skill
    {
        public int Id { get; set; }
        public string SkillName { get; set; }
        public DateTime CreatedDate { get; set; } = DateTime.Now;
    }

}