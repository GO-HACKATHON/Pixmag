using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApiPixMag.Services;
using WebApiPixMag.Model;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApiPixMag.Controllers
{
    [Route("api/[controller]")]
    public class LoginController : Controller
    {
        // GET: api/values
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        // GET api/values/5
        [HttpGet]
        public User Get(string name, string password)
        {
            LoginServices oLoginService = new LoginServices();
            var ouser = oLoginService.UserLogin(name, password);
            return ouser;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            LoginServices oLoginService = new LoginServices();
            var a = oLoginService.UserLogin("darma","darma1314");
            return "valuea";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
