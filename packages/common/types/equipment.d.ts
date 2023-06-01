import type { Modules } from '../network';
import type { Bonuses, Enchantments, Light, Stats } from './item';

export interface EquipmentData {
    type: Modules.Equipment;
    key: string;
    name?: string;
    count: number;
    enchantments: Enchantments;
    attackRange?: number; // Specifically for weapon type.
    poisonous?: boolean;
    attackStats?: Stats;
    defenseStats?: Stats;
    bonuses?: Bonuses;
    attackStyle?: Modules.AttackStyle;
    attackStyles?: Modules.AttackStyle[];
    archer?: boolean;
    light?: Light;
}

export interface SerializedEquipment {
    equipments: EquipmentData[];
}

export type EquipmentType = 'weapon' | 'armour' | 'pendant' | 'ring' | 'boots';
