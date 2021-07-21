using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Products
    {
        public int ProductId { get; set; }

        public string ProductName { get; set; }

        public string Category { get; set; }

        public string Price { get; set; }

        public int Quantity { get; set; }

        public string Inventory { get; set; }

        public string Material1 { get; set; }

        public string Material2 { get; set; }

        public string PhotoFileName { get; set; }

    }
}