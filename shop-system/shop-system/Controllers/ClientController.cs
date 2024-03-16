using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using shop_system.Models.Client;
using shop_system.Services;

namespace shop_system.Controllers
{
    [Route("api/clients")]
    public class ClientController : ControllerBase
    {
        private readonly IClientService _clientService;

        public ClientController(IClientService clientService)
        {
            _clientService = clientService;
        }


        [HttpPost("new")]
        public ActionResult CreateClient([FromBody] CreateClientDto dto)
        {
            var newClientId = _clientService.CreateClient(dto);

            return Created($"{newClientId}", null);
        }
    }
}
