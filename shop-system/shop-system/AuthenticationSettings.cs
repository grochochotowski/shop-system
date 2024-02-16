﻿namespace shop_system
{
    public class AuthenticationSettings
    {
        public string JwtKey { get; set; }
        public int JwtExpiresDays { get; set; }
        public string JwtIssuer { get; set; }
    }
}
