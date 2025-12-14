import * as migration_20250326_181527_initial from './20250326_181527_initial';
import * as migration_20250704_133855_email_sender_migration from './20250704_133855_email_sender_migration';
import * as migration_20251018_194504 from './20251018_194504';
import * as migration_20251018_210026 from './20251018_210026';
import * as migration_20251018_214103 from './20251018_214103';
import * as migration_20251018_220256 from './20251018_220256';
import * as migration_20251018_222556 from './20251018_222556';
import * as migration_20251214_120436 from './20251214_120436';
import * as migration_20251214_124501 from './20251214_124501';
import * as migration_20251214_132844 from './20251214_132844';
import * as migration_20251214_140300 from './20251214_140300';

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
    up: migration_20251018_194504.up,
    down: migration_20251018_194504.down,
    name: '20251018_194504',
  },
  {
    up: migration_20251018_210026.up,
    down: migration_20251018_210026.down,
    name: '20251018_210026',
  },
  {
    up: migration_20251018_214103.up,
    down: migration_20251018_214103.down,
    name: '20251018_214103',
  },
  {
    up: migration_20251018_220256.up,
    down: migration_20251018_220256.down,
    name: '20251018_220256',
  },
  {
    up: migration_20251018_222556.up,
    down: migration_20251018_222556.down,
    name: '20251018_222556',
  },
  {
    up: migration_20251214_120436.up,
    down: migration_20251214_120436.down,
    name: '20251214_120436',
  },
  {
    up: migration_20251214_124501.up,
    down: migration_20251214_124501.down,
    name: '20251214_124501',
  },
  {
    up: migration_20251214_132844.up,
    down: migration_20251214_132844.down,
    name: '20251214_132844',
  },
  {
    up: migration_20251214_140300.up,
    down: migration_20251214_140300.down,
    name: '20251214_140300'
  },
];
