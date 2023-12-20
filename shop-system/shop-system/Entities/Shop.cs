namespace shop_system.Entities
{
    public class Shop
    {
        public int Id { get; set; }
        public string Country { get; set; }
        public string Region { get; set; }
        public string City { get; set; }
        public string Street { get; set; }
        public string Building { get; set; }
        public string Premises { get; set; }
        public string PostalCode { get; set; }
        public string PhoneNumber { get; set; }

        public int ClothingId { get; set; }
        public virtual List<Tuple<Clothing, int>> Clothes { get; set; }
    }
}
