using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace sampleapp.Core.Models
{
    public class User
    {
        public int Id { get; set; }
        [Required]
        public string FirstName { get; set; }
        public string LastName { get; set; }
        [Required]
        public string Password { get; set; }
        public virtual List<Skill> Skills { get; set; }
        public DateTime CreatedDate { get; set; } = DateTime.Now;

    }
}