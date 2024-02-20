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
        public ActionResult<IEnumerable<ShopDto>> GetAll() 
        {
            var shopsDtos = _shopService.GetAll();

            return Ok(shopsDtos);
        } // Get all shops

        [HttpGet("{id}")]
        public ActionResult<ShopDto> Get([FromRoute] int id) 
        {
            var shopDto = _shopService.Get(id);

            if (shopDto is null) return NotFound($"Shop with id: {id} does not exist");
            return Ok(shopDto);
        } // Get shop by ID

        [HttpPost]
        public ActionResult AddShop([FromBody] AddShopDto dto)
        {
            var newShopId = _shopService.Add(dto);

            return Created($"api/shop/{newShopId}", null);
        } // Add new shop

        [HttpDelete("{id}")]
        public ActionResult RemoveShop([FromRoute] int id)
        {
            _shopService.Delete(id);

            return NoContent();
        } // Delete shop by ID
    }
}
