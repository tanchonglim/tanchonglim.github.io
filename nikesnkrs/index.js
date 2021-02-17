function getEarlyLink() {
  const normalLink = document.getElementById("normalLink").value;
  console.log("ok");
  const Http = new XMLHttpRequest();
  const url = normalLink;
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange = (e) => {
    let str, start, end;
    let response = Http.responseText;

    //get product name
    str = `<link data-react-helmet="true" rel="canonical" href="`;
    let productName = "";
    start = response.search(str);
    productName = response.slice(start + str.length);
    end = productName.search(`"/>`);
    productName = productName.slice(0, end);
    console.log(productName);

    //get product id
    str = `name="branch:deeplink:productId" content=`;
    let productId = "";
    start = response.search(str);
    productId = response.slice(start + str.length);
    end = productId.search(`/>`);
    productId = productId.slice(0, end);
    productId = productId.slice(1, productId.length - 1);

    let earlyLink =
      productName +
      `?productId=` +
      productId +
      `&size=` +
      document.getElementById("size").value;
    document.getElementById("earlyLink").value = earlyLink;
  };
}

function copyLink() {
  console.log("copied");
  var copyText = document.getElementById("earlyLink");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}
