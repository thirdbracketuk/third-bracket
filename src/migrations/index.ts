import * as migration_20250326_181527_initial from './20250326_181527_initial';
import * as migration_20250704_133855_email_sender_migration from './20250704_133855_email_sender_migration';
import * as migration_20251222_085610 from './20251222_085610';

export const migrations = [
  {
    up: migration_20250326_181527_initial.up,
    down: migration_20250326_181527_initial.down,
    name: '20250326_181527_initial',
  },
  {
    up: migration_20250704_133855_email_sender_migration.up,
    down: migration_20250704_133855_email_sender_migration.down,
    name: '20250704_133855_email_sender_migration',
  },
  {
    up: migration_20251222_085610.up,
    down: migration_20251222_085610.down,
    name: '20251222_085610'
  },
];
