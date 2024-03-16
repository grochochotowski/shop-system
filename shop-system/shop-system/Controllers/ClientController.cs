using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using shop_system.Services;

namespace shop_system.Controllers
{
    [Route("api/clients")]
    public class ClientController : ControllerBase
    {
        private readonly IClientService _clientService;

        public ClothingController(IClientService clientService)
        {
            _clientService = clientService;
        }
    }
}
