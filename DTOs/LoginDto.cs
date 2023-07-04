using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.Security.AccessControl;

namespace API.DTOs
{
    public class LoginDto
    {
        // [Required]
        public string Username { get; set; }
        // [Required]
        public string Password { get; set; }
    }
}