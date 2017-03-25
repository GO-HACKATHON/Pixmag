using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApiPixMag.Model;

namespace WebApiPixMag.Services
{
    public class LoginServices : MongoDBConnection
    {
        protected IMongoDatabase _database;
        public LoginServices()
        {
            _database = _MongoConnection.GetDatabase("GoHackathon");
        }

        public User UserLogin(string Name, string Password)
        {
            var collection = _database.GetCollection<User>("user");
            //untuk get semua.
            //var obj = collection.Find(_=>true);
            var obj1 = collection.Find(_ => true);
            var obj = collection.Find(x=> x.name==Name && x.password==Password).FirstOrDefault();
            return obj;
        }

    }
}
