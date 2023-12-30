namespace shop_system.Models
{
    public class AddClothingDto
    {
        public int Id { get; set; }
        public string Season { get; set; }
        public string Code { get; set; }
        public string Category { get; set; }
        public string Colour { get; set; }
        public int Size { get; set; }
        public double Price { get; set; }
    }
}
