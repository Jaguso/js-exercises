// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"

function domainName(url) {
  url.split('').map(item => {
    if (item === '/') {
      return url.indexOf(item)
    } else {
      return item
    }
  })
}

domainName("https://www.cnet.com")