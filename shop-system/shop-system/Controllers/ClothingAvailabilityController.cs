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
        [HttpPost]
        public ActionResult Post([FromRoute] int shopId, ClothingAvailabilityDto dto)
        {
            var newClothingAvailability = _availabilityService.Create(shopId, dto);
            if (newClothingAvailability == -1) return NotFound($"Shop with id: {shopId} does not exist");
            return Ok($"api/{shopId}/clothing/{newClothingAvailability}");
        }
    }
}
