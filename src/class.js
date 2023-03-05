module.exports = class Wine {
  constructor(
    fixed_acidity,
    volatile_acidity,
    citric_acid,
    residual_sugar,
    chlorides,
    free_sulphur,
    total_sulphur,
    density,
    ph,
    sulphates,
    alocholo
  ) {
    this.fixed_acidity = fixed_acidity;
    this.volatile_acidity = volatile_acidity;
    this.citric_acid = citric_acid;
    this.residual_sugar = residual_sugar;
    this.chlorides = chlorides;
    this.free_sulphur = free_sulphur;
    this.total_sulphur = total_sulphur;
    this.density = density;
    this.ph = ph;
    this.sulphates = sulphates;
    this.alocholo = alocholo;
  }
};
