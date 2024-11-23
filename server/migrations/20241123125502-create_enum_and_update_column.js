module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add values to enum type if they don't exist yet
    await queryInterface.sequelize.query(`
      DO $$ 
      BEGIN
        -- Add the enum values if they don't exist yet
        CREATE TYPE IF NOT EXISTS "public"."enum_empleado_ciclo_planilla_tipo" AS ENUM ('mensual', 'bimensual');
      EXCEPTION WHEN duplicate_object THEN null;
      END $$;
      
      ALTER TABLE "empleado_ciclo_planilla" ALTER COLUMN "tipo" SET NOT NULL;
      ALTER TABLE "empleado_ciclo_planilla" ALTER COLUMN "tipo" DROP DEFAULT;
      ALTER TABLE "empleado_ciclo_planilla" ALTER COLUMN "tipo" TYPE "public"."enum_empleado_ciclo_planilla_tipo" USING ("tipo"::"public"."enum_empleado_ciclo_planilla_tipo");
      COMMENT ON COLUMN "empleado_ciclo_planilla"."tipo" IS 'Frecuencia del ciclo de planilla';
    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      ALTER TABLE "empleado_ciclo_planilla" ALTER COLUMN "tipo" TYPE VARCHAR;
      ALTER TABLE "empleado_ciclo_planilla" ALTER COLUMN "tipo" DROP NOT NULL;
      ALTER TABLE "empleado_ciclo_planilla" ALTER COLUMN "tipo" SET DEFAULT 'mensual';
      DROP TYPE IF EXISTS "public"."enum_empleado_ciclo_planilla_tipo";
    `);
  }
};
