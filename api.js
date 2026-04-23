// Simple API fetch example
async function getCountries() {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();

    // عرض أول 5 دول في الـ Console
    console.log("Sample Countries:");
    data.slice(0, 5).forEach(country => {
        console.log(country.name.common);
    });
}

// استدعاء الدالة
getCountries();
