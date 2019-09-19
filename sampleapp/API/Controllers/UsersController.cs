
using Microsoft.AspNetCore.Mvc;
using sampleapp.Core.Models;
using sampleapp.Core.Repository;

namespace sampleapp.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        IRepository _repo;
        public UsersController(IRepository repository)
        {
            _repo = repository;
        }

        [HttpPost]
        public IActionResult AddUser(User newUser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { message = "invalid model data" });
            }

            _repo.RegisterUser(newUser);

            return Ok(new
            {
                message = "Successfully created"
            });
        }

        [HttpGet]
        public IActionResult GetUsers()
        {
            return Ok(value: _repo.GetUsers());
        }

        
    }
}