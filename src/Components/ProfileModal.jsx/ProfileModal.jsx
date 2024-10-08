import { Modal} from '@mantine/core';

function ProfileModal({open,close}) {
  return (
    <>
      <Modal
        overlayOpecity={0.55}
        overlayBlur={3}
        opened={open}
        onClose={()=>close(false)}
      >
        {/* Modal content */}
        <form action="" className="infoForm">
            <h3>your info</h3>
        </form>
      </Modal>

     
    </>
  );
}
export default ProfileModal