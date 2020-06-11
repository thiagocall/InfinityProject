using System;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using ServiceStack.Redis;
using ServiceStack.Redis.Generic;

namespace InfinityApi.services
{
    public class RedisService
    {
        private readonly string _redisHost;
        private readonly int _redisPort;

        IRedisClient _redis;

        public RedisService(IConfiguration config)
        {
            _redisHost = config["Redis:Host"];
            _redisPort = Convert.ToInt32(config["Redis:Port"]);

        }

        public void Connect()
        {

            try
            {
                var configString = $"{_redisHost}:{_redisPort}";
                RedisConfig.DefaultRetryTimeout = 2000;
                RedisConfig.DefaultSendTimeout = 2000;
                _redis = new RedisClient(configString);
            }
            catch (RedisException)
            {

            }

        }

        public IRedisClient GetRedisClient()
        {
            return this._redis;
        }

        public bool setCliente (teste _teste){
            

            using (var redis = this.GetRedisClient()){

                IRedisTypedClient<teste> res = redis.As<teste>() as IRedisTypedClient<teste>;

                if (!res.ContainsKey(_teste.Id))
                {
                    res.Store(_teste, new TimeSpan(0,0,0,0));
                    res.Save();
                    return true;
                } 
                else {
                    return false;
                }
            }
        

        }

        public bool setClientes (IList<teste> _teste){
            
        try
        {
            
            using (var redis = this.GetRedisClient()){

                IRedisTypedClient<teste> res = redis.As<teste>() as IRedisTypedClient<teste>;

                    res.StoreAll(_teste);
                    res.Save();
                    return true;
              
            }

            }
        catch (RedisException)
        {
            
            return false;
        }
        

        }


    }


    public class teste{

        public string Id { get; set; }
        public string Nome { get; set; }
        public string Idade { get; set; }

    }
}