using Microsoft.AspNetCore.Mvc;
using shop_system.Models;
using shop_system.Services;

namespace shop_system.Controllers
{
    [Route("api/{shopId}/clothing")]
    public class ClothingAvailabilityController : ControllerBase
    {
        private readonly IClothingAvailabilityService _availabilityService;

        public ClothingAvailabilityController(IClothingAvailabilityService availabilityService)
        {
            _availabilityService = availabilityService;
        }
        [HttpGet]
        public ActionResult<IEnumerable<GetClothesFromShopDto>> Get([FromRoute] int shopId)
        {
            var availableClothes = _availabilityService.Get(shopId);

            return Ok(availableClothes);
        } // Get all clothes that are in a shop by ID

        [HttpPost]
        public ActionResult Post([FromRoute] int shopId, [FromBody] CreateClothingAvailabilityDto dto)
        {
            var newClothingAvailability = _availabilityService.Create(shopId, dto);
            if (newClothingAvailability == -1) return NotFound($"Shop with id: {shopId} does not exist");
            return Ok($"api/{shopId}/clothing/{newClothingAvailability}");
        } // Add clothing to shop by ID
    }
}
