using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApiPixMag.Services
{
    public class MongoDBConnection
    {
        protected string connectionString = "mongodb://localhost:27017";
        protected MongoClient _MongoConnection;
        public MongoDBConnection()
        {
            _MongoConnection = new MongoClient(connectionString);
        }
    }
}
