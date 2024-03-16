using AutoMapper;
using shop_system.Entities;
using shop_system.Exceptions;
using shop_system.Models.Clothing;

namespace shop_system.Services
{
    public interface IClothingService
    {
        int Add(CreateClothingDto dto);
        void Delete(int id);
        ClothingDto Get(int id);
        IEnumerable<ClothingDto> GetAll();
    }

    public class ClothingService : IClothingService
    {
        private readonly ShopDbContext _context;
        private readonly IMapper _mapper;

        public ClothingService(ShopDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }



        public IEnumerable<ClothingDto> GetAll()
        {
            var clothes = _context
                .Clothes
                .ToList();

            var result = _mapper.Map<List<ClothingDto>>(clothes);

            return result;
        } // Get all clothes

        public ClothingDto Get(int id)
        {
            var clothing = _context
                .Clothes
                .FirstOrDefault(c => c.Id == id);

            if (clothing is null) throw new NotFoundException("Clothing not found");
            var result = _mapper.Map<ClothingDto>(clothing);
            return result;
        } // Get clothing by ID

        public int Add(CreateClothingDto dto)
        {
            var clothing = _mapper.Map<Clothing>(dto);
            _context.Clothes.Add(clothing);
            _context.SaveChanges();

            return clothing.Id;
        } // Add new clothing

        public void Delete(int id)
        {
            var clothing = _context
                .Clothes
                .FirstOrDefault(c => c.Id == id);

            if (clothing is null) throw new NotFoundException("Clothing not found");

            _context.Clothes.Remove(clothing);
            _context.SaveChanges();
        } // Delete clothing by ID
    }
}
