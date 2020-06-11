using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using InfinityApi.services;
using Microsoft.AspNetCore.Mvc;

namespace InfinityApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class valuesController: ControllerBase
    {
        public RedisService RedisService { get; set; }
        public valuesController(RedisService _redisService)
        {
            this.RedisService = _redisService;
        }

        [HttpPost]
        public ActionResult setCliente([FromBody] teste _teste){

            this.RedisService.Connect();

            var result = this.RedisService.setCliente(_teste);

            return Ok(result);
        }

            [HttpPost("salvaClientes")]
        public ActionResult setClientes([FromBody] IList<teste> _testes){

            this.RedisService.Connect();

            var result = this.RedisService.setClientes(_testes);

            return Ok(result);
        }




    }
}