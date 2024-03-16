﻿using shop_system.Entities;

namespace shop_system
{
    public class ShopDto
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string PhoneNumber { get; set; }



        public int AddressId { get; set; }
        public virtual Address Address { get; set; }



        public virtual ICollection<ClothingAvailability> Clothes { get; set; }
    }
}
