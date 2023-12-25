using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
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
            var clothesDtos = _clothingService.GetAll();
            return Ok();
        } // Get clothing by ID

        [HttpPost]
        public ActionResult AddClothing([FromBody] ClothingDto dto)
        {

            return Created();
        } // Add new clothing

        [HttpDelete("{id}")]
        public ActionResult RemoveClothing([FromRoute] int id)
        {


            return NoContent();
        } // Delete clothing by ID
    }
}
