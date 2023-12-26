namespace shop_system.Models
{
    public class GetClothesFromShopDto
    {
        public int Quantity { get; set; }
        public int ClothingId { get; set; }


        public ClothingDto Clothing { get; set; }
    }
}
