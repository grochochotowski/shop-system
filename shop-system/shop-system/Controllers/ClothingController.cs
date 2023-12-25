using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using shop_system.Entities;
using shop_system.Models;
using shop_system.Services;

namespace shop_system.Controllers
{
    [Route("api/clothing")]
    public class ClothingController : ControllerBase
    {
        private readonly IClothingService _clothingService;

        public ClothingController(IClothingService clothingService)
        {
            _clothingService = clothingService;
        }


        [HttpGet]
        public ActionResult<IEnumerable<ClothingDto>> GetAll()
        {
            var clothesDtos = _clothingService.GetAll();

            return Ok(clothesDtos);
        } // Get all clothes

        [HttpGet("{id}")]
        public ActionResult<ShopDto> Get([FromRoute] int id)
        {
            var clothingDto = _clothingService.GetAll();

            if (clothingDto is null) return NotFound($"Clothing with id: {id} does not exist");
            return Ok(clothingDto);
        } // Get clothing by ID

        [HttpPost]
        public ActionResult AddClothing([FromBody] ClothingDto dto)
        {
            var newClothingId = _clothingService.Add(dto);

            return Created($"api/clothing/{newClothingId}", null);
        } // Add new clothing

        [HttpDelete("{id}")]
        public ActionResult RemoveClothing([FromRoute] int id)
        {
            var clothing = _clothingService.Delete(id);

            if (!clothing) return NotFound($"Clothing with id: {id} does not exist");
            return NoContent();
        } // Delete clothing by ID
    }
}
