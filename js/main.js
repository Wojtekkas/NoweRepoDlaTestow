$(function () {
    var patientsList = [
        { firstName: "Jan", lastName: "Kowalski" },
        { firstName: "Jan", lastName: "Kowalski2" },
        { firstName: "Jan", lastName: "Kowalski3" },
        { firstName: "Jan", lastName: "Kowalski4" },
        { firstName: "Adam", lastName: "Nowak" },
        { firstName: "Adam", lastName: "Nowak2" },
        { firstName: "Adam", lastName: "Nowak3" },
        { firstName: "Adam", lastName: "Nowak4" },
        { firstName: "Andrzej", lastName: "Kielcz" },
        { firstName: "Andrzej", lastName: "Kielcz2" },
        { firstName: "Andrzej", lastName: "Kielcz3" },
        { firstName: "Andrzej", lastName: "Kielcz4" }
    ];

    patientsList.forEach(function (patient) {
        addPatient(patient);
    })
});

function addPatient(patient) {
    $("#patients-list")
        .append(
        $("<li/>")
            .text(patient.firstName + " " + patient.lastName)
        );
}