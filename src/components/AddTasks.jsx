"use client";


import {CirclePlus} from "@gravity-ui/icons";
import {Button, ListBox, Select, Input, Label, Modal, Surface, TextField} from "@heroui/react";


const AddTasks = ({creatATask}) => {
    return (
        <Modal>
      <Button variant="secondary">Add Task</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <CirclePlus className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Contact Us</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and we will  get back to you. The modal adapts automatically
                when the keyboard appears on mobile.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form action={creatATask} className="flex flex-col gap-4">
                  <TextField className="w-full" name="title" type="text">
                    <Label>Title</Label>
                    <Input placeholder="Enter your Task Title" />
                  </TextField>
                  <TextField className="w-full" name="description" type="text">
                    <Label>Description</Label>
                    <Input placeholder="Enter your description" />
                  </TextField>
                 <Select name="priority" className="w-[256px]" placeholder="priority">
      <Label>Priority</Label>
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          <ListBox.Item id="Low" textValue="Low">
           Low
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="Medium" textValue="Medium">
            Medium
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="High" textValue="High">
            High
            <ListBox.ItemIndicator />
          </ListBox.Item>
          
        </ListBox>
      </Select.Popover>
    </Select>
                
           <Select name="status" className="w-[256px]" placeholder="Status">
      <Label>Status</Label>
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          <ListBox.Item id="Pending" textValue="Pending">
      Pending
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="Inprogress" textValue="Inprogress">
    Inprogress
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="Completed" textValue="Completed">
            Completed
            <ListBox.ItemIndicator />
          </ListBox.Item>
          
        </ListBox>
      </Select.Popover>
    </Select>

                  <TextField className="w-full" name="assignTo">
                    <Label>Assigned To</Label>
                    <Input placeholder="Your Task Assign To" />
                  </TextField>
                  <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button slot='close' type="submit">Submit</Button>
            </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
    );
};

export default AddTasks;