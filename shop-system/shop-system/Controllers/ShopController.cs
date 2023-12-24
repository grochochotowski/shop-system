using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using shop_system.Entities;
using shop_system.Models;
using shop_system.Serivces;
using System.Net.WebSockets;

namespace shop_system.Controllers
{
    [Route("api/shop")]
    public class ShopController : ControllerBase
    {
        
        private readonly IShopService _shopService;
        public ShopController(IShopService shopService)
        {
            _shopService = shopService;
        }


        [HttpGet]
        public ActionResult<IEnumerable<ShopDto>> GetAll() // Get all shops
        {
            var shopsDtos = _shopService.GetAll();

            return Ok(shopsDtos);
        }

        [HttpGet("{id}")]
        public ActionResult<ShopDto> Get([FromRoute] int id) // Get shop by ID
        {
           

            if (shopDto is null) return NotFound($"Shop with id: {id} does not exist");
            return Ok(shopDto);
        }

        [HttpPost]
        public ActionResult AddShop([FromBody] AddShopDto dto) // Add new shop
        {
            var newShopId = _shopService.Add(dto);

            return Created($"api/shop/{newShopId}", null);
        }

        [HttpDelete("{id}")]
        public ActionResult RemoveShop([FromRoute] int id) // Delete shop by ID
        {
            var shop = _context
                .Shops
                .FirstOrDefault (s => s.Id == id);

            if (shop is null) return NotFound($"Shop with id: {id} does not exist");
            _context.Shops.Remove(shop);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
