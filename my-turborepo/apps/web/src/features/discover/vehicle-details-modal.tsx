import React, { useState } from 'react';
import Image from 'next/image';
import styles from './vehicle-details-modal.module.css';
import type { Vehicle } from '@repo/types';

type VehicleDetailsModalProps = {
  vehicle: Vehicle;
  onClose: () => void;
};

const VehicleDetailsModal = ({ vehicle, onClose }: VehicleDetailsModalProps) => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [selectedTrim, setSelectedTrim] = useState(vehicle.trim);

  if (!vehicle) return null;

  const handleTrimChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTrim(event.target.value);
    // Here you would typically fetch new data based on the selected trim
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <div className={styles.overviewLayout}>
            <div>
              <p><strong>Body Type:</strong> {vehicle.body_type}</p>
              <p><strong>Doors:</strong> {vehicle.doors}</p>
              <p><strong>Seating:</strong> {vehicle.total_seating}</p>
            </div>
            <div>
              <p><strong>Exterior Colors:</strong> {vehicle.colors_exterior}</p>
              <p><strong>Interior Colors:</strong> {vehicle.colors_interior}</p>
            </div>
          </div>
        );
      case 'Powertrain':
        return (
          <div className={styles.tabContentLayout}>
            <div className={styles.tabData}>
              <p><strong>Engine:</strong> {vehicle.cylinders} cylinders, {vehicle.engine_size_l}L</p>
              <p><strong>Horsepower:</strong> {vehicle.horsepower_hp} @ {vehicle.horsepower_rpm} RPM</p>
              <p><strong>Torque:</strong> {vehicle.torque_ft_lbs} lb-ft @ {vehicle.torque_rpm} RPM</p>
              <p><strong>Drive Type:</strong> {vehicle.drive_type}</p>
              <p><strong>Transmission:</strong> {vehicle.transmission}</p>
            </div>
            <div className={styles.tabImage}>
              <Image src="/branding/dyno-graph.png" alt="Dyno graph" width={400} height={225} />
            </div>
          </div>
        );
      case 'Dimensions':
        return (
          <div className={styles.tabContentLayout}>
            <div className={styles.tabData}>
              <p><strong>Length:</strong> {vehicle.length_in}&quot;</p>
              <p><strong>Width:</strong> {vehicle.width_in}&quot;</p>
              <p><strong>Height:</strong> {vehicle.height_in}&quot;</p>
              <p><strong>Wheelbase:</strong> {vehicle.wheelbase_in}&quot;</p>
              <p><strong>Curb Weight:</strong> {vehicle.curb_weight_lbs} lbs</p>
            </div>
            <div className={styles.tabImage}>
              <Image src="/branding/turning-radius.png" alt="Turning radius diagram" width={400} height={225} />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <div className={styles.topSection}>
          <Image src={vehicle.imageUrl || ''} alt={`${vehicle.make} ${vehicle.model}`} className={styles.vehicleImage} width={400} height={225} />
          <div className={styles.basicInfo}>
            <h2>{vehicle.year} {vehicle.make} {vehicle.model}</h2>
            <div className={styles.trimSelector}>
              <label htmlFor="trim-select">Trim:</label>
              <select id="trim-select" value={selectedTrim} onChange={handleTrimChange}>
                {/* Add dummy trim options here, later this will be dynamic */}
                <option value="Base">Base</option>
                <option value="Sport">Sport</option>
                <option value="Limited">Limited</option>
              </select>
            </div>
            <button className={styles.addToGarageButton}>Add to Garage</button>
          </div>
        </div>
        <div className={styles.bottomSection}>
          <div className={styles.tabContainer}>
            <button className={`${styles.tab} ${activeTab === 'Overview' ? styles.activeTab : ''}`} onClick={() => setActiveTab('Overview')}>Overview</button>
            <button className={`${styles.tab} ${activeTab === 'Powertrain' ? styles.activeTab : ''}`} onClick={() => setActiveTab('Powertrain')}>Powertrain</button>
            <button className={`${styles.tab} ${activeTab === 'Dimensions' ? styles.activeTab : ''}`} onClick={() => setActiveTab('Dimensions')}>Dimensions</button>
          </div>
          <div className={styles.tabContent}>
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetailsModal;
