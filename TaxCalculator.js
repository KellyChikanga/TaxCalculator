function StateTax(cost, state) {
    if (state === "NY") {
       return cost * 1.04;
    } else if (state === "CA") {
       return cost * 1.0725;
    } else return "ERROR";
}
