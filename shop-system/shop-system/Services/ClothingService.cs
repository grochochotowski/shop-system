using shop_system.Models;

namespace shop_system.Services
{
    public interface IClothingService
    {
        int Add(ClothingDto dto);
        bool Delete(int id);
        ClothingDto Get(int id);
        IEnumerable<ClothingDto> GetAll();
    }

    public class ClothingService : IClothingService
    {
        public IEnumerable<ClothingDto> GetAll()
        {

            return result;
        } // Get all clothes

        public ClothingDto Get(int id)
        {

            return result;
        } // Get clothing by ID

        public int Add(ClothingDto dto)
        {

            return result;
        } // Add new clothing

        public bool Delete(int id)
        {


            return true;
        } // Delete clothing by ID
    }
}
