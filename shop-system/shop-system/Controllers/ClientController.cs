using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using shop_system.Entities;
using shop_system.Models.Client;
using shop_system.Services;

namespace shop_system.Controllers
{
    [Route("api/clients")]
    [ApiController]
    public class ClientController : ControllerBase
    {
        private readonly IClientService _clientService;
        private readonly ShopDbContext _context;

        public ClientController(IClientService clientService, ShopDbContext context)
        {
            _clientService = clientService;
            _context = context;
        }


        [HttpPost("new")]
        public ActionResult CreateClient([FromBody] CreateClientAddressPropsDto dto)
        {
            Client? client = _context.Clients.FirstOrDefault(c => c.Name == dto.Name);

            if (client == null)
            {
                var newClientId = _clientService.CreateClient(dto);
                return Created($"api/clients/{newClientId}", null);
            }
            else
            {
                return Conflict($"Client already exists in data base: api/clients/{client.Id}");
            }
        }


        [HttpGet("all")]
        public ActionResult<IEnumerable<ClientDto>> GetAllClients()
        {
            var clientDtos = _clientService.GetAllClients();
            return Ok(clientDtos);
        }
    }
}
